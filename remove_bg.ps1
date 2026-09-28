Add-Type -AssemblyName System.Drawing

$inputPath = Join-Path $PSScriptRoot "assets\nasrullah.png"
$outputPath = Join-Path $PSScriptRoot "assets\nasrullah-transparent.png"

$img = [System.Drawing.Bitmap]::FromFile($inputPath)
$newBmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $img.Width; $x++) {
    for ($y = 0; $y -lt $img.Height; $y++) {
        $pixel = $img.GetPixel($x, $y)
        # Check if the pixel is near pure white (background)
        if ($pixel.R -gt 235 -and $pixel.G -gt 235 -and $pixel.B -gt 235) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $newBmp.SetPixel($x, $y, $pixel)
        }
    }
}

$img.Dispose()
$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()
Write-Output "Successfully saved transparent PNG: $outputPath"
