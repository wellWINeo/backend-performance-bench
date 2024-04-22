FROM gradle:8-jdk21-jammy AS BUILDER

WORKDIR /build

COPY src/main ./src/main
COPY gradle/wrapper gradle/wrapper
COPY gradlew .
COPY build.gradle .
COPY settings.gradle .

RUN gradle clean build

FROM eclipse-temurin:21-jre AS FINAL

WORKDIR /app

COPY --from=BUILDER /build/build/libs/*SNAPSHOT.jar todo.jar

EXPOSE 8080

CMD ["java", "-jar", "todo.jar"]