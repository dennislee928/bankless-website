*** Settings ***
Documentation    CONTAINER: when a Dockerfile is added, replace skip with build/smoke steps (see devplan.md).
Library    OperatingSystem

*** Test Cases ***
CONTAINER Skip When No Dockerfile
    ${exists}=    Run Keyword And Return Status    File Should Exist    ${CURDIR}/../../../Dockerfile
    Skip If    not ${exists}    Repository has no Dockerfile yet — container smoke not applicable.
