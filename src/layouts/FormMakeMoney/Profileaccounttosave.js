import React from 'react'
import SettingAccount from "./SettingAccount"
import { useState } from "react"
import { useContext } from "react"
import { Test } from "./SettingAccount"
import { notidata } from "../data/notidata"
import "./Profileaccounttosave.css"
export default function Profileaccounttosave({remove}) {
	const value = useContext(Test)
	const [firstname,setFirstName] = useState()
	const [lasttname,setLastName] = useState()
	const [username,setUserName] = useState()
	const [about,setAbout] = useState()
	const [urls,setUrls] = useState()
	const [emailaddress,setEmailAddress] = useState()
	const [phonenumber,setPhoneNumber] = useState()
	const [country,setCountry] = useState()
	const [language,setLanguage] = useState()
function confirm () {
	remove() 
}
  return (
    <div className="profile-account-container">
      <div className="container-account">
	<div className="title-account">
		<div className="title-account-info">Tài khoản</div>
	</div>
	<div className="title-profile">
		<div className="title-profile-1">Hồ sơ</div>
		<div className="title-profile-2">Thông tin này sẽ được hiển thị công khai, vì vậy hãy cẩn thận với những gì bạn chia sẻ.</div>
	</div>
	<div className="title-name">
		<div className="title-firstname">
			<div className="title-firstname-1">Họ: {value.firstname}</div>
			
		</div> 
		<div className="title-lastname">
			<div className="title-lastname-1">Tên: {value.lasttname}</div>
			
		</div>
	</div>
	<div className="title-username">
		<div className="title-username-1">Tên tài khoản</div>
		<div className="title-username-2">
			<div className="title-username-square">
				<div className="title-username-3">workcation.com/</div>
			</div>
			<div className="form-title-username-4">
				{value.username}
			</div>
		</div>	
	</div>
	<div className="title-photo">
		<div className="title-photo-1">Ảnh thẻ</div>
		<div className="title-photo-2">
			<div className="photo-img">
				<button className="change-img">+</button>
			</div>
		</div>
	</div>
	<div className="title-about">
		<div className="title-about-1">Sứ mệnh</div>
		<div className="form-about-content">{value.about}</div>
		<div className="title-about-2">Brief description for your profile.URLs are hyperlinked.</div>
	</div>
	<div className="title-url">
		<div className="title-url-1">URL</div>
		<div type="text" className="form-title-url-2">{value.urls}</div>
	</div>
	<div className="title-personal-information">
		<div className="title-personal-information-1">Thông tin liên hệ</div>
		<div className="title-personal-information-2">Thông tin này sẽ được hiển thị công khai, vì vậy hãy cẩn thận với những gì bạn chia sẻ.</div>
	</div>
	<div className="personal-data">
		<div className="data-email">
			<div className="data-email-1">Địa chỉ email</div>
			<div type="text" className="form-data-input">{value.emailaddress}</div>
		</div>
		<div className="data-phone">
			<div className="data-phone-1">Số điện thoại</div>
			<div type="text" className="form-data-input-1">{value.phonenumber}</div>
		</div>
		<div className="data-country">
			<div className="data-country-1">Quốc gia</div>
			<div type="text" className="form-data-input">{value.country}</div>
		</div>
		<div className="data-language">
			<div className="data-language-1">Ngôn ngữ</div>
			<div type="text" className="form-data-input">{value.language}</div>
		</div>
	</div>
	<div className="time-create-account">
			<div className="time-create-account-info">Tài khoản này được tạo vào ngày 5 tháng 1 năm 2017,8:35:40 CH</div>
	</div>
</div>
<div className="account-button-end">
		<div className="form-account-button-save">
			<button onClick={confirm}className="form-account-button-save-1">Xác nhận</button>
		</div>
	</div>
</div>
  )
}
