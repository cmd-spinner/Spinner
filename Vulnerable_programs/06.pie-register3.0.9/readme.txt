=== Pie Register ===

Contributors: genetech
Tags: registration plugin, membership plugin, user register, register, registration, register plugin, custom registration, custom login plugin, custom login, custom registration, enhance login, enhance profile, custom  logo screen, user registration, custom profile page
Requires at least: 3.5
Tested up to: 4.9.4
Stable tag: 3.0.9

Enhance default Registration form, Custom logo, Password field, Invitation codes, Paypal, Captcha validation, Email verification, user moderation &amp; more.

== Description ==
**WordPress Registration Plugin**

**Welcome to Pie Register by Genetech Solutions.**

Create customized user registration forms, verify and moderate registrations, use invitation codes, membership payments, two-step verification, social login, email marketing, conditional logic and many more features! [https://pieregister.com](https://pieregister.com).

It's the easy, secure and intuitive way to create and brand registration pages for your WordPress sites. Seriously, No Coding Required! 

Use Pie Register when you need to create user registration forms for your WordPress site and you don't want to build from scratch. Use the plugin to quickly add custom user registration forms and more to your WordPress based blog or site. The plugin even lets your customers pay for the service you provide. It allows you to charge the users via PayPal when they register on your site.  


With [Pie Register](http://pieregister.com/) you can: 

*   Drag/Drop fields to Create Registration Form
*   Verify & Moderate Registrations
*   Invitation-only registration using Invitation Codes
*   Custom Email Templates for notifications
*   CAPTCHA Support
*   Short Codes
*   PayPal integration to charge Membership Fees
*   Create Custom Profile Pages
*   Use Widgets
*   User data Import/Export

With the clean, attractive and easy to use interface introduced in Pie Register 3.0 and above you can drag and drop fields to your forms and add advanced registration features to your service that can help you go above and beyond the competition.


Additional features in [Pie Register Pro](http://pieregister.com/):

*   Unlimited Registration Forms
*   Use Math CAPTCHA, Honeypot, No CAPTCHA reCAPTCHA and even timed submission
*   Social Logins including Facebook and Twitter
*   Conditional logic to build advanced registration flows
*   Email marketing using MailChimp
*   Auto login after registration
*   Two-way login (SMS)
*   Rules for Role Based Redirection to land users on different pages based on user role.
*   Block unwanted users by username, email and IP address
*   Built-in form templates
*   Import/Export users and settings
*   Profile search
*   Restrict widgets: Set visibility of widgets for specific user roles and non-logged in users.
*   Premium support

== Installation ==
Just follow the simple steps:
1. Upload the `pie-register` directory to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Set the options in the Settings Panel


== Support ==
* For support visit Pie Register [forum](http://pieregister.com/forum/ "Pie-Register Forum").


== CHANGELOG ==
### 3.0.9
* Fixed reCaptcha conflict issue.
* Fixed WP menu issue.
* Notify unverified user email template updated.
* Other small issues and PHP standard fixes.

### 3.0.8
* Fixed tooltip issue on WP post editor.
* Fixed UTF-8 charachter issue in Import Users.
* Updated English Language Pack (PO Files).
* Fixed Profile picture as Avatar. 
* Other small fixes.

### 3.0.7
* Fixed Pro features issues.

### 3.0.6
* Fixed HTML Script field issue.
* Fixed jQuery conflict issue.

### 3.0.5
* Fixed several typos.
* Fixed HTML Script field issue.
* Fixed page visibility restriction issue for administrator role.

### 3.0.4
* Fixed email address edit verification issue.
* Fixed rest password issue.

### 3.0.2
* Fixed "Visual editor" issue.
* User Account Delete Issue.
* Email Address Capitalization Error Issue.
* Small changes and fixes.

### 3.0.1
* Fixed "Visual editor" issue.

### 3.0
* Admin UI updates
* Major security fixes

### 2.0.20
* Fixed "Remember me" issue.

### 2.0.19
* Fixed Security Vulnerability and SQL Injection issues.
* Section break field label can now be keep emptied.
* Added Hooks to PR Profile Update action.

### 2.0.18
* Fixed Password reset key error.
* Fixed Addresss line 2 (was required to fill)
* Removed unnecessary files

### 2.0.17
* Fixed Un-escaped string  on Dashboard Widget.

### 2.0.16
* Fixed Security vulnerabilities a.) Login b.) Invitation code.

### 2.0.15
* Input Sanitization and other Security issues fixes
* Username Field is now optional on Registration Form
* Minimum Password Strength can be set on Registration
* ckEditor fixes
* Fixed several typos
* Change of Email Verification
* Added security for password changes in Profile (front-end)
* Fixed Several CSS Issues and many other stuff


### 2.0.14
* Allowed multiple addresses on Registration Form
* Allowed multiple email addresses in Admin Notification
* Added Nonce on Import n Export Forms (Backend)
* Added Nonce on User Verification Forms (Backend)
* Fixed Password Reset Bug
* Remove Settings and Pages created by Pie-Register on uninstall hook
* ReCaptcha Keys Validation on General Settings Page

### 2.0.13
* Added WP hook on PR Login
* Added ability to Verify Email on later change
* Added Minimum Password strength limit on Registration Form
* Fixed Forgot password issues
* Fixed Export BY Date
* Fixed Other Languages Issues in Subject Line and Email Templates
* Fixed 'Block Output CSS' issue
* Fixed First Name Required issue in Profile Area
* Fixed Not Show Fields in Profile issues
* Fixed 'error notices' being thrown on WP_DEBUG
* Removed License Key requirements
* Added Italian in our Language pack

### 2.0.12
* Fixed SSL issues with Login/Registration and Redirection
* Fixed File Upload errors
* Fixed Conflicts in Form Editor
* Fixed Notification related errors happening on some Servers
* Updated language files

### 2.0.11
* Fixed Password Protected pages error

### 2.0.10
* Added Profile Picture & File Upload variable to Email templates.
* Added Support for Interim Login
* Added Math Captcha
* Fixed CSS issues
* Enqueue PR scripts on it's own pages.
* Added reCaptcha Skins
* Added WP Filters on User Profile Pictures.
* Allow some HTML on Description Boxes
* Fixed several Conflicts with other themes and plugins.
 
### 2.0.9
* Replace all Static URI calls with proper WP URI Functions
* Added ability to redirect Users to an External URLs on Logout
* Changed Password Strength Meter wth Wordpress
* Fixed Several jQuery/Javascript issues and conlicts with several themes and plugins
* Fixed Invitation Code table upgrading issue (Removed DB Delta)
* Made Default Fields labels editable both at Form Editor and Translation files
* Fixed Several Spelling Mistakes
* Tested with different Plugins and themes

### 2.0.8
* Added Paypal IPN verification
* Added Logout URL with after logout page redirection via Settings page (i.e: http://example.com/?piereg_logout_url=true)
* Updated Email Templates
* Fixed Headers Problems on Email Templates
* Updated Replacement keys on Email templates
* Remove user Password variable from Templates
* Fixed All Email templates Notifications
* Fixed Invitation Code Validation when set not Required
* Fixed After login Redirection issues
* Updated Text Editor
* Fixed Post Header hidden problems.
* Added User IP variable on Email Templates
* Compaitbility checks with many other plugins and much more.

### 2.0.7
* Made License key requirement optional and removed Popup of Un-Registered Version.

### 2.0.6
* Upload missing file `invitation_code_pagination.php` into the package.
* Fixed File Upload issues.

### 2.0.5
* Added Invitation Code Dashboard Widget
* Added Return and Reply Path on All Emails sent via Pie-Register
* Removed Option to Modify Avatar
* Stopped PR pages if already exist.
* Added option to Override WP Profile Page
* Added Option to Override WP Login/Registration/Forgot Password Pages.
* Enhanced Invitation Code Module
* Fixed Shortcodes related issues.
* Display Error when CURL or FOPEN library not installed on Server.
* Updated User Role Function.
* Fixed Upgrading issues.
* Fixed Email sending issues.
* Fixed CSS issues.
* Added option to import version 1.0 Email templates.
* Fixed lot of minor issues and much more..

### 2.0.4
* Added DB Version
* Fixed Upgrading to version 2.0 issues from older version

### 2.0.3
* Disable Pie-Register to modify avatars
* Made Custom CSS and Tracking Code appears across the site

### 2.0.2
* Major Release
* First Stable version of 2.0 family
* Fixed a lot of bugs in version 2.0.1

### v2.0.1
* Fixed layout issues
* Fixed Jquery Conflicts
* Fixed profile Edit page
* Fixed Redirect issues
* Added WP User Roles on Registration
* Added Profile Picture Option
* Added Registration Date on Email templates
* Added help page
* Updated Get Free License Option
* and much more

### v2.0.beta
* A totally new look sporting an attractive New Interface
* Revamped with a lot of New Features.
* Built in intuitive Form Editor
* Added Shortcodes.
* and much much more..
* Warning: This is Beta Release - NOT recommended to upgrade/install on Production sites, it still in beta, suggestions and bugs reporting are welcome

### v1.31.3
* zxcvbn lib is added
* Password Strength meter fix and compatible for future versions.
* UTF character bug fixed
* Login Enqueue function added.

### v1.31.2
* Stripslashes issue resolved
* function mb_string has change to htmlentities with utf8_decode functions
* wpdb_prepare replaced with sanitize function
* Empty URL field is now allowed on After Sign in redirect.
* Custom Fields are now removeable.
* Grace Period issue resolved.

### v1.31
* Backward Compatibility Issues fixed.
* Plugin Conflict Issue fixed.
* Input has been sanitized.
* UTF-8 characters are now supported by necessary text fields.
* reCaptcha Library has been upgraded.


### v1.30
#### New Features:

* You can now specify the landing page on successful login.
* Added Logo URL box for Login pages.
* Added 'Reset to defaults' Button on Settings Page.
* Replaced the static path for admin, includes and plugin folders with WP relative Path Functions
* Replaced the WordPress Link and ALT text from login and registration page logo with site URL and NAME
* Invitation code will now appear on the user profile page.

#### Bugs Fixed:

* Fixed Paypal issues and upgraded the IPN.
* Fixed password strength meter error.
* Fixed invitation code widget and auto delete problem.
* Fixed re-Captcha size issue on registration form.
* Fixed some security issues.

### v1.2.91
* Fixed PHP Warning: Missing argument 2 for wpdb::prepare()

### v1.2.9a
* Fixed Custom Fields Reseting problem
* Fixed Invitation Code update problem


### v1.2.9
* Fixed Array problem on text fields.
* Compatible upto wp 3.3.*

### v1.2.8
* Invitation Code Section has been extended
* Custom Email Notification on Admin/Email verification
* deprecated Functions has been replaced
* No need to place the "Session" Variable in the wp-login.php file, anymore
* and much much more..
* Warning! This is the beta Version of the Pie-Register, Do not upgrade unless you've upgraded Wordpress to 3.2* Version.

### v1.2.7
* New ScreenShots Added

### v1.2.6 October 4 2011
* Fixed Multiple Invitation Saving Problem

### v1.2.5
* Fixed custom meta fields "Saving" problem by the admin. (Fixed by Julian Warren with Thanks)
* Added New Layout Pie-Register Menu built!

### v1.2.4
* Fixed the 'Backslash' problem on the admin Setting Page.

### v1.2.3
* Highlighted the Code to put on the wp-login.php at the plugin page.

### v1.2.2

* Fixed Settings Override.
* Compatible to Wp 3.0.5


### v1.2.1

* Fixed Password strength meter.
* Compatible to Wp 3.0.4


### v1.2.0

* Fixed Image uploads errors.
* First step to Compatiblity to Wp 3.0

### v1.1.9a

* Fixed Error after registration.

### v1.1.9

* Fixed Login box after verification.
* Fixed diplaying invitation codes to the user dashboard.

### v1.1.8

* Fixed Payment link.
* Fixed session errors/header errors.
* And much much more..

### v1.1.7

* Fixed Resend verification email.
* Fixed resend payment link.

### v1.1.6

* Fixed Security updates for Paypal resend code.
* Add Phone/Mobile number Field.

### v1.1.5

* Keep away Unverified/Un-paid users to get logged in.
* Fixed Logo display and form fields.
* Fixed short tags enabled.
* Fixed Date fields.
* Changed Paypal Buy now to One -Time Subscription fee Button.

### v1.1.3**

* Fixed User Registeration after Paypal Return.


### v1.1.2**

* Fixed temp user id and email verification.

### v1.1.1**

* Added Paypal Return and thank you URL.

### v1.0.1**

* Fixed Password meter.
* Added Paypal as shopping Cart


== Screenshots ==

1. Registration Page
2. Pie Register Settings
3. Invitation Tracking Dashboard Widget
4. Unverified User Management