import React from "react"
import "./SettingAccount.css"
const SettingAccount = () => {
	return <div className="container-account">
		<div className="title-account">
			<div className="title-account-info">Account</div>
		</div>
		<div className="title-profile">
			<div className="title-profile-1">Profile</div>
			<div className="title-profile-2">This infomation will be display so be carefully what you share.</div>
		</div>
		<div className="title-name">
			<div className="title-firstname">
				<div className="title-firstname-1">First name</div>
				<input type="text" className="title-firstname-2"></input>
			</div>
			<div className="title-lastname">
				<div className="title-lastname-1">Last name</div>
				<input type="text" className="title-lastname-2"></input>
			</div>
		</div>
		<div className="title-username">
			<div className="title-username-1">Username</div>
			<div className="title-username-2">
				<div className="title-username-square">
				   <div className="title-username-3">workcation.com/</div>
			    </div>
			    <input type="text" className="title-username-4"></input>
			</div>
		</div>
		<div className="title-photo">
			<div className="title-photo-1">Photo</div>
			<div className="title-photo-2">
				<div className="photo-img"></div>
				<div className="photo-change">
					<button className="change">Change</button>
				</div>
				<div className="photo-save">
					<button className="save">Save</button>
				</div>
			</div>
		</div>
		<div className="title-about">
			<div className="title-about-1">About</div>
			<textarea className="about-content"></textarea>
			<div className="title-about-2">Brief description for your profile.urls are hyperlinked.</div>
		</div>
		<div className="title-url">
			<div className="title-url-1">url</div>
			<input type="text" className="title-url-2"></input>
		</div>
		<div className="title-personal-information">
			<div className="title-personal-information-1">Personal Information</div>
			<div className="title-personal-information-2">This infomation will be display so be carefully what you share.</div>
		</div>
		<div className="personal-data">
			<div className="data-email">
				<div className="data-email-1">Email address</div>
				<input type="text" className="data-email-2"></input>
			</div>
			<div className="data-phone">
				<div className="data-phone-1">Phone number</div>
				<input type="text" className="data-phone-2"></input>
			</div>
			<div className="data-country">
				<div className="data-country-1">Country</div>
				<input type="text" className="data-country-2"></input>
			</div>
			<div className="data-language">
				<div className="data-language-1">Language</div>
				<input type="text" className="data-language-2"></input>
			</div>
		</div>
		<div className="time-create-account">
             <div className="time-create-account-info">This account was created on January 5,2017,8:35:40 PM</div>
		</div>
		<div className="account-button-end">
			<div className="account-button-cancel">
				<button className="account-button-cancel-1">Cancel</button>
			</div>
			<div className="account-button-save">
			   <button className="account-button-save-1">Save</button>
			</div>
		</div>
	</div>
}

export default SettingAccount 
