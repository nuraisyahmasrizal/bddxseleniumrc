# DevTestOps
---

Complete three out of four tasks below:

1. Test Cases
1. Functional and Non-Functional Testing
1. BDDxSeleniumRC
1. Testing team

## Test Cases

Answer the questions below:

- Tell us how do you write test cases.
  1. Create the test case description
  2. Add necessary test data
  3. Create test steps
  4. Check and document the testing result
  5. Add pre-condition and post condition after verify the basic version of the testing
  
- Describe what do you do before coming up with test cases.
  1. Read through and understand the requirements of the software based on the documentation provided such as BRD, FSD, user stories etc. 
  2. Identify the test scenarios from the requirement given. 
  3. Define test scope such as what can will be tested, what won't be tested and limitation of the testing.

- What are the format and essential information you incorporate into the test cases.
  1. Test Case ID
  2. Test Case Title
  3. Test Description
  4. Test Preconditions
  5. Test Steps
  6. Test Data
  7. Expected Result
  8. Actual Result
  9. Pass/Fail Status

## Functional and Non-Functional Testing

Answer the questions below:

- Describe functional testing in software testing.
  Functional  testing is to verify the functionality/feature of a software is working and meet the user requirements.
  
- What are the type of functional testing you can perform in software testing.
  1. Unit testing
  2. System integration testing
  3. User Acceptance testing
  4. Regression testing
  5. Smoke testing 
  
- Describe non-functional testing in software testing.
  Non functional testing is to test how well the system/software work that are not related to the specific functions.
  
- Why do you do non-functional testing
  To assess the overall quality and effectiveness of the system/software so that able to optimize the performance of the system/software and meet user satisfaction.

## BDDxSeleniumRC

- This repository consist of a testing framework called BDDxSeleniumRC that is designed to be used for testing purposes.
- Add one test case to check the logout functionality.

  Scenario: Successful logout from the application

Given user is logged into the application
When user clicks on the logout button
Then user successfully logout from the application
And user redirected to the login page

package StepDefinitions;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.*;

public class LogoutTest {

	WebDriver Driver = null;	

	@Given("User is logged into the application")
	public void user_is_logged_into_the_application() {

	System.setproperty("webdriver.chrome.driver", "/path/to/chromedriver");

	driver = new ChromeDriver();
	
	driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECOND);

	driver.get("user_application_url");

	//Assuming login code has implemented here

	}

	@When("User clicks on the logout button")
	public void user_clicks_on_the_logout_button() {
		
		WebElement logoutButton = driver.findElement(By.id("logout"));
		logoutButton.click();
	}

	@Then("User successfully logout from the application")
	public void user_successfully_logout_from_application() {
		
		WebElement logoutNotification = driver.findElement(By.id("logoutNotfication"));
		
		if(logoutNotification.isDisplayed()) {
		
			System.out.println("Logout Successful");

		else {

			System.out.println("LogOut Unsuccessful");		

			}
		}
	}

	@And("User redirected to the login page")
	public void user_redirected_to_the_login_page() {
		WebElement loginButton = driver.findElement(By.id("Login")).isDisplayed();

		driver.quit();
		driver.close();	
	}
}

## Testing team

Answer the questions below:

- Describe how do you imagine an ideal testing team.
  My ideal testing team is a team that consists of team member with various expertise in testing. Each members are clear with the roles and responsibility. The   
  team members can always communicate proactively and sharing updates in a timely manner.
  
- Describe how would the team involve themselves in agile and devops culture.
  Development and operational team need to have a close collobaration in the project delivery so that all team members have better understanding of each 
  individual challenges and can work together to fix and improve in each of project delivery.  

