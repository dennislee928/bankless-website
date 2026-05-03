*** Settings ***
Library           Browser
Resource          ../../resources/variables.robot
Suite Setup       New Browser    chromium    headless=True
Suite Teardown    Close Browser

*** Test Cases ***
News Page Should Load And Display Articles
    New Page    ${BASE_URL}/news
    Sleep    5s
    Get Title    should be    BanklessDAO Community
    Get Text    h1    should be    News
    Wait For Elements State    "VStack" >> "div"    visible
    ${article_count}=    Get Element Count    "VStack" >> "div"
    Should Be True    ${article_count} > 0
