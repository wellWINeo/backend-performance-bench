FROM mcr.microsoft.com/dotnet/sdk:8.0 AS BUILDER
WORKDIR /source

COPY dotnet.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=BUILDER /source/out .
ENTRYPOINT ["dotnet", "dotnet.dll"]