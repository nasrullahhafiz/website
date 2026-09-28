# Setup PATH for Git and GitHub CLI
$env:Path = "$env:LOCALAPPDATA\Programs\MinGit\cmd;C:\Program Files\GitHub CLI;$env:Path"

Write-Host "======================================" -ForegroundColor Cyan
Write-Host " GitHub Deployment Script" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Cyan

# 1. Update dist folder
Write-Host "[1/3] Updating dist folder..." -ForegroundColor Yellow
$distDir = "$PSScriptRoot\dist"
if (Test-Path $distDir) { Remove-Item -Recurse -Force $distDir }
New-Item -ItemType Directory -Path $distDir | Out-Null
Copy-Item "$PSScriptRoot\index.html" -Destination $distDir
Copy-Item "$PSScriptRoot\css" -Destination $distDir -Recurse
Copy-Item "$PSScriptRoot\js" -Destination $distDir -Recurse
Copy-Item "$PSScriptRoot\assets" -Destination $distDir -Recurse
Write-Host "dist folder ready!" -ForegroundColor Green

# 2. Check Git status and commit
Write-Host "`n[2/3] Checking Git status..." -ForegroundColor Yellow
Set-Location -Path $PSScriptRoot
git add .
git commit -m "feat: Reactive proximity stroke on CTA card, liquid ruby sheen on footer brand, and update credit to nasrullah x naslab" 2>$null

# 3. Push to GitHub
Write-Host "`n[3/3] Pushing to GitHub..." -ForegroundColor Yellow
$token = $env:GH_PAT
if ($token) {
    $remoteUrl = "https://${token}@github.com/nasrullahhafiz/website.git"
    git push $remoteUrl main:main
} else {
    git push origin main
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n======================================" -ForegroundColor Green
    Write-Host " Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host " URL: https://github.com/nasrullahhafiz/website" -ForegroundColor Cyan
    Write-Host " Vercel Live: https://nasrullahhafiz.vercel.app/" -ForegroundColor Cyan
    Write-Host "======================================" -ForegroundColor Green
} else {
    Write-Host "`nFailed to push. Please verify repository exists and try again." -ForegroundColor Red
}
