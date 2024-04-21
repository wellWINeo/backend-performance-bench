FROM eclipse-temurin:21 AS BUILDER

WORKDIR /build

COPY ./src/main ./src/main
COPY gradle .
COPY gradlew .
COPY build.gradle .
COPY settings.gradle .

RUN ./gradlew clean build

FROM eclipse-temurin:21-jre AS FINAL

WORKDIR /app

COPY --from=BUILDER /source/build/libs/*SNAPSHOT.jar todo.jar

EXPOSE 8080

CMD ["java", "-jar", "todo.jar"]