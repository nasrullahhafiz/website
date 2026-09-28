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
git commit -m "Deploy update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')" 2>$null

# 3. Check GitHub authentication
Write-Host "`n[3/3] Authenticating & Pushing to GitHub..." -ForegroundColor Yellow

# Configure gh as git credential helper
& "C:\Program Files\GitHub CLI\gh.exe" auth setup-git 2>$null

# Try pushing
$pushResult = git push -u origin main 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nGitHub login required. Starting login..." -ForegroundColor Yellow
    & "C:\Program Files\GitHub CLI\gh.exe" auth login --web -h github.com
    & "C:\Program Files\GitHub CLI\gh.exe" auth setup-git
    git push -u origin main
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n======================================" -ForegroundColor Green
    Write-Host " Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host " URL: https://github.com/nasrullahhafiz/website" -ForegroundColor Cyan
    Write-Host "======================================" -ForegroundColor Green
} else {
    Write-Host "`nFailed to push. Please verify repository exists and try again." -ForegroundColor Red
}
