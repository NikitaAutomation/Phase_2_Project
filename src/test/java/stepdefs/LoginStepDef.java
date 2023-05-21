package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {
	WebDriver driver = Hooks.driver;

	@Given("I have launched the application")
	public void i_have_launched_the_application() throws InterruptedException {
	   
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(5000);
	}

	@When("I enter username as {string}")
	public void i_enter_username_as(String UserNameVal) {
		WebElement userName = driver.findElement(By.name("user-name"));
		userName.sendKeys(UserNameVal);
	   
	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String PassVal) {
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(PassVal);
	   
	}
	@Given("I click on login button")
	public void i_click_on_login_button()  {
	   
		WebElement loginLink = driver.findElement(By.name("login-button"));
		loginLink.click();
	}
	
	@Then("I should land on homepage")
	public void i_should_land_on_home_page()
	{
		String homepageTitle = driver.getTitle();
		String expectedTitle = "Swag Labs";
		Assert.assertEquals(homepageTitle,expectedTitle );
		System.out.println("Login Successfull");
	}
	
	
	
	
	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String ExpError) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement error = driver.findElement(By.xpath("//h3[@data-test='error']"));
		String ActError = error.getText();
		
		Assert.assertEquals(ActError, ExpError);  
	}


	


}
