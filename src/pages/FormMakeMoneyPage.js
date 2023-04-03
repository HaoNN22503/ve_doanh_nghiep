import React from "react"
import Sidebar from "../components/Sidebar"
import "./FormMakeMoneyPage.css"
import SettingAccount from "../layouts/FormMakeMoney/SettingAccount"

const CalendarPages = () => {
	return (
		<div className="form-make-money-page">
			<Sidebar />
			<SettingAccount />
		</div>
	)
}

export default CalendarPages
