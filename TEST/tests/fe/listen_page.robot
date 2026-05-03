*** Settings ***
Library           Browser
Resource          ../../resources/variables.robot
Suite Setup       New Browser    chromium    headless=True
Suite Teardown    Close Browser

*** Test Cases ***
Listen Page Should Display Bankless Africa Podcast
    New Page    ${BASE_URL}/listen
    Sleep    5s
    Get Title    should be    BanklessDAO Community
    ${bankless_africa_section}=    Get Element    text=Bankless Africa
    Should Be True    ${bankless_africa_section} is not None
    Within    ${bankless_africa_section}
        Get Text    text=Hosted By
        Get Text    text=Exploring the world of Web3 and DeFi in Africa.
    END
