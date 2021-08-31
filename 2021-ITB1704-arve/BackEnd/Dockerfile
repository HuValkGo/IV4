# Define base image
FROM mcr.microsoft.com/dotnet/sdk:5.0.201-alpine3.12 AS builder


# Copy project files
WORKDIR /source
COPY ./*.sln .
COPY ./*.csproj .

# Restore
RUN dotnet restore

# Copy all source code
COPY . .

# Publish

WORKDIR /source
RUN dotnet publish "BackendProject.csproj" -c Release -o /publish

# Runtime
FROM mcr.microsoft.com/dotnet/aspnet:5.0.4-alpine3.12
WORKDIR /app
COPY --from=builder /publish .
ENTRYPOINT ["dotnet", "BackendProject.dll"]
