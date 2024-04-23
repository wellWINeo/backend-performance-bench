# Build the application from source
FROM golang:1.22 AS BUILDER
WORKDIR /source
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o ./todoapp ./cmd/api/main.go

# Deploy the application binary into a lean image
FROM gcr.io/distroless/base-debian12 AS FINAL
WORKDIR /app
COPY --from=BUILDER /source/todoapp .
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["todoapp"]