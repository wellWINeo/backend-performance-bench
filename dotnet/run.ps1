dotnet build -c Release

$ConnectionString = (Get-Content -Raw -Path '.\appsettings.Development.json' | ConvertFrom-Json).ConnectionStrings.Database

$env:ASPNETCORE_URLS='http://*:8080';
$env:ConnectionStrings__Database=$ConnectionString;
.\bin\release\net8.0\publish\dotnet.exe