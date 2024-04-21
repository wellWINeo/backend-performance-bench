$env:JAVA_HOME="~\.jdks\openjdk-21.0.2"

./gradlew.bat build

& "$env:JAVA_HOME\bin\java.exe" -jar ./build/libs/Todo-0.0.1-SNAPSHOT.jar