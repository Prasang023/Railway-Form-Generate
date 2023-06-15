import React, { useState } from "react"
import ReactDOM from "react-dom"
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import MyDocument from "./components/MyDocument"
import { usePDF } from "@react-pdf/renderer"
import "./App.css"

function App() {
	const [name, setName] = useState("")
	const [sec1, setSec1] = useState([false, false, false, false, false])
	const [sec2, setSec2] = useState({
		trainNoAndName: "-",
		dateOfJourney: "",
		class: "1A",
		numberOfSeats: "-",
		stationFrom: "-",
		stationTo: "-",
		boardingAt: "-",
		reservationUpto: "-",
		mobile: ""
	})
	const [sec4, setSec4] = useState({
		trainNoAndName: "-",
		dateOfJourney: "",
		class: "1A",
		stationFrom: "-",
		stationTo: "-",
		fullname: "-",
		fulladdress: "-",
		mobile: "",
		date: "-",
		time: "-"
	})
	const [passengers, setPassengers] = useState([
		{
			sno: 1,
			name: "-",
			gender: "M",
			age: "-",
			tan: "-",
			berthDemand: "-",
			mealDemand: "-"
		}
	])
	const [children, setChildren] = useState([
		{
			sno: 1,
			name: "-",
			gender: "M",
			age: "-"
		}
	])
	// const [instance, updateInstance] = usePDF({ document: <MyDocument name={name} /> });

	// if (instance.loading) return <div>Loading ...</div>;

	// if (instance.error) return <div>Something went wrong: {error}</div>;

	const changeArr = (ind) => {
		let copyArr = [...sec1]
		copyArr[ind] = !copyArr[ind]
		setSec1([...copyArr])
	}

	const handleChangeSec2 = (e) => {
		setSec2({
			...sec2,
			[e.target.name]: e.target.value
		})
	}

	const handleChangeSec4 = (e) => {
		setSec4({
			...sec4,
			[e.target.name]: e.target.value
		})
	}

	const handleChangePass = (e) => {
		let ind = passengers.length - 1
		let copyPass = [...passengers]
		copyPass[ind] = {
			...copyPass[ind],
			[e.target.name]: e.target.value
		}
		setPassengers([...copyPass])
	}

	const addPass = () => {
		let obj = {
			sno: passengers.length + 1,
			name: "-",
			gender: "M",
			age: "-",
			tan: "-",
			berthDemand: "-",
			mealDemand: ""
		}
		setPassengers([...passengers, obj])
	}

	const deletePass = (ind) => {
		let tmpArr = passengers.filter((x) => x.sno != ind)
		tmpArr = tmpArr.map((x, i) => {
			return { ...x, sno: i + 1 }
		})
		setPassengers([...tmpArr])
	}

	const handleChangeChild = (e) => {
		let ind = children.length - 1
		let copyChild = [...children]
		copyChild[ind] = {
			...copyChild[ind],
			[e.target.name]: e.target.value
		}
		setChildren([...copyChild])
	}

	const addChild = () => {
		let obj = {
			sno: children.length + 1,
			name: "-",
			gender: "M",
			age: "-"
		}
		setChildren([...children, obj])
	}

	const deleteChild = (ind) => {
		let tmpArr = children.filter((x) => x.sno != ind)
		tmpArr = tmpArr.map((x, i) => {
			return { ...x, sno: i + 1 }
		})
		setChildren([...tmpArr])
	}
	console.log(children)

	return (
		<div className="container">
			<div className="formContainer">
				<div>
					<h3>Section 1 Options</h3>
					<input
						type="checkbox"
						id="sec10"
						checked={sec1[0]}
						value={0}
						onChange={(e) => changeArr(e.target.value)}
					/>
					<label htmlFor="sec10"> If you are a Medical Practitioner</label>
					<br />
					<input
						type="checkbox"
						id="sec11"
						checked={sec1[1]}
						value={1}
						onChange={(e) => changeArr(e.target.value)}
					/>
					<label htmlFor="sec11"> If you are a Pregnant woman</label>
					<br />
					<input
						type="checkbox"
						id="sec12"
						checked={sec1[2]}
						value={2}
						onChange={(e) => changeArr(e.target.value)}
					/>
					<label htmlFor="sec12"> If you want Sr. Citizen Concession</label>
					<br />
					<input
						type="checkbox"
						id="sec13"
						checked={sec1[3]}
						value={3}
						onChange={(e) => changeArr(e.target.value)}
					/>
					<label htmlFor="sec13">
						Do you want to be upgraded without any extra charge?
					</label>
					<br />
					<input
						type="checkbox"
						id="sec14"
						checked={sec1[4]}
						value={4}
						onChange={(e) => changeArr(e.target.value)}
					/>
					<label htmlFor="sec14"> Do you want a bedroll in train?</label>
				</div>
				<div className="secDiv">
					<h3>Enter Journey Details</h3>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="trainNoAndName">
								Train No and Name:
							</label>
							<input
								type="text"
								id="trainNoAndName"
								name="trainNoAndName"
								className="inputField"
								onChange={(e) => handleChangeSec2(e)}
							/>
						</div>
						<div className="inputDiv">
							<label className="inputLabel" for="dateOfJourney">
								Date of Journey:
							</label>
							<input
								type="date"
								id="dateOfJourney"
								name="dateOfJourney"
								className="inputField"
								onChange={(e) => handleChangeSec2(e)}
							/>
						</div>
					</div>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="sec2class">
								Class:
							</label>

							<select
								className="inputField"
								name="class"
								id="sec2class"
								onChange={(e) => handleChangeSec2(e)}
							>
								<option value="1A">1A</option>
								<option value="2A">2A</option>
								<option value="3A">3A</option>
								<option value="SL">SL</option>
								<option value="SL">FC</option>
								<option value="SL">CC</option>
								<option value="SL">2S</option>
							</select>
						</div>
						<div className="inputDiv">
							<label className="inputLabel" for="numberOfSeatsSec2">
								No. of Berths/Seats:
							</label>
							<input
								type="number"
								id="numberOfSeatsSec2"
								name="numberOfSeats"
								className="inputField"
								onChange={(e) => handleChangeSec2(e)}
							/>
						</div>
					</div>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="stationFromSec2">
								Station From:
							</label>
							<input
								type="text"
								id="stationFromSec2"
								name="stationFrom"
								className="inputField"
								onChange={(e) => handleChangeSec2(e)}
							/>
						</div>
						<div className="inputDiv">
							<label className="inputLabel" for="stationToSec2">
								Station To:
							</label>
							<input
								type="text"
								id="stationToSec2"
								name="stationTo"
								className="inputField"
								onChange={(e) => handleChangeSec2(e)}
							/>
						</div>
					</div>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="boardingAtSec2">
								Boarding At:
							</label>
							<input
								type="text"
								id="boardingAtSec2"
								name="boardingAt"
								className="inputField"
								onChange={(e) => handleChangeSec2(e)}
							/>
						</div>
						<div className="inputDiv">
							<label className="inputLabel" for="reservationUptoSec2">
								Reservation Upto:
							</label>
							<input
								type="text"
								id="reservationUptoSec2"
								name="reservationUpto"
								className="inputField"
								onChange={(e) => handleChangeSec2(e)}
							/>
						</div>
					</div>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="mobileSec2">
								Mobile Number:
							</label>
							<input
								type="number"
								id="mobileSec2"
								name="mobile"
								className="inputField"
								onChange={(e) => handleChangeSec2(e)}
							/>
						</div>
					</div>
					<br />
				</div>
				<div className="secDiv">
					{passengers.map((pass) => (
						<div>
							<div className="pInputRow">
								{/* <div>{pass.sno}</div> */}
								<div className="inputDiv pinput">
									<label className="inputLabel" for="pname">
										Name:
									</label>
									<input
										type="text"
										id="pname"
										name="name"
										className="inputField"
										onChange={(e) => handleChangePass(e)}
									/>
								</div>
								<div className="inputDiv pinput">
									<label className="inputLabel" for="pgender">
										Gender:
									</label>

									<select
										className="inputField"
										name="gender"
										id="pgender"
										onChange={(e) => handleChangePass(e)}
									>
										<option value="M">M</option>
										<option value="F">F</option>
									</select>
								</div>
								<div className="inputDiv pinput">
									<label className="inputLabel" for="page">
										Age:
									</label>
									<input
										type="number"
										id="page"
										name="age"
										className="inputField"
										onChange={(e) => handleChangePass(e)}
									/>
								</div>
							</div>
							<div className="pInputRow">
								<div className="inputDiv pinput">
									<label className="inputLabel" for="ptan">
										Concession / TA No:
									</label>
									<input
										type="text"
										id="ptan"
										name="tan"
										className="inputField"
										onChange={(e) => handleChangePass(e)}
									/>
								</div>
								<div className="inputDiv pinput">
									<label className="inputLabel" for="pberthDemand">
										Choice of Berth (if any):
									</label>

									<select
										className="inputField"
										name="berthDemand"
										id="pberthDemand"
										onChange={(e) => handleChangePass(e)}
									>
										<option value="-">-</option>
										<option value="UB">UB</option>
										<option value="LB">LB</option>
									</select>
								</div>
								<div className="inputDiv pinput">
									<label className="inputLabel" for="pmealDemand">
										Meal:
									</label>

									<select
										className="inputField"
										name="mealDemand"
										id="pmealDemand"
										onChange={(e) => handleChangePass(e)}
									>
										<option value="-">-</option>
										<option value="Veg">Veg</option>
										<option value="Non-Veg">Non-Veg</option>
									</select>
								</div>
								<button
									className="btn btn-delete"
									onClick={() => deletePass(pass.sno)}
								>
									X
								</button>
							</div>
						</div>
					))}
					<button className="btn btn-add" onClick={addPass}>
						+ Add Passenger
					</button>
				</div>

				<div className="secDiv">
					{children.map((child) => (
						<div>
							<div className="pInputRow">
								{/* <div>{pass.sno}</div> */}
								<div className="inputDiv pinput">
									<label className="inputLabel" for="cname">
										Name:
									</label>
									<input
										type="text"
										id="cname"
										name="name"
										className="inputField"
										onChange={(e) => handleChangeChild(e)}
									/>
								</div>
								<div className="inputDiv pinput">
									<label className="inputLabel" for="cgender">
										Gender:
									</label>

									<select
										className="inputField"
										name="gender"
										id="cgender"
										onChange={(e) => handleChangeChild(e)}
									>
										<option value="M">M</option>
										<option value="F">F</option>
									</select>
								</div>
								<div className="inputDiv pinput">
									<label className="inputLabel" for="cage">
										Age:
									</label>
									<input
										type="number"
										id="cage"
										name="age"
										className="inputField"
										onChange={(e) => handleChangeChild(e)}
									/>
								</div>
								<button
									className="btn btn-delete"
									onClick={() => deleteChild(child.sno)}
								>
									X
								</button>
							</div>
						</div>
					))}
					<button className="btn btn-add" onClick={addChild}>
						+ Add Child
					</button>
				</div>

				<div className="secDiv">
					<h3>Onward/Return Journey Details</h3>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="trainNoAndNameSec4">
								Train No and Name:
							</label>
							<input
								type="text"
								id="trainNoAndNameSec$"
								name="trainNoAndName"
								className="inputField"
								onChange={(e) => handleChangeSec4(e)}
							/>
						</div>
						<div className="inputDiv">
							<label className="inputLabel" for="dateOfJourneySec4">
								Date of Journey:
							</label>
							<input
								type="date"
								id="dateOfJourneySec4"
								name="dateOfJourney"
								className="inputField"
								onChange={(e) => handleChangeSec4(e)}
							/>
						</div>
					</div>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="sec4class">
								Class:
							</label>

							<select
								className="inputField"
								name="class"
								id="sec4class"
								onChange={(e) => handleChangeSec4(e)}
							>
								<option value="1A">1A</option>
								<option value="2A">2A</option>
								<option value="3A">3A</option>
								<option value="SL">SL</option>
								<option value="SL">FC</option>
								<option value="SL">CC</option>
								<option value="SL">2S</option>
							</select>
						</div>
					</div>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="stationFromSec4">
								Station From:
							</label>
							<input
								type="text"
								id="stationFromSec4"
								name="stationFrom"
								className="inputField"
								onChange={(e) => handleChangeSec4(e)}
							/>
						</div>
						<div className="inputDiv">
							<label className="inputLabel" for="stationToSec4">
								Station To:
							</label>
							<input
								type="text"
								id="stationToSec4"
								name="stationTo"
								className="inputField"
								onChange={(e) => handleChangeSec4(e)}
							/>
						</div>
					</div>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="fullnameSec4">
								Full Name:
							</label>
							<input
								type="text"
								id="fullnameSec4"
								name="fullname"
								className="inputField"
								onChange={(e) => handleChangeSec4(e)}
							/>
						</div>
						<div className="inputDiv">
							<label className="inputLabel" for="fulladdressSec4">
								Full Address:
							</label>
							<input
								type="text"
								id="fulladdressSec4"
								name="fulladdress"
								className="inputField"
								onChange={(e) => handleChangeSec4(e)}
							/>
						</div>
					</div>
					<div className="inputRow">
						<div className="inputDiv">
							<label className="inputLabel" for="mobileSec4">
								Mobile Number:
							</label>
							<input
								type="number"
								id="mobileSec4"
								name="mobile"
								className="inputField"
								onChange={(e) => handleChangeSec4(e)}
							/>
						</div>
					</div>
					<br />
				</div>
				<button className="btn btn-dwd">
					<PDFDownloadLink
						className="btn-dwd"
						document={
							<MyDocument
								sec1={sec1}
								sec2={sec2}
								passengers={passengers}
								sec4={sec4}
								children={children}
							/>
						}
						fileName={`${Date.now()}`}
					>
						{({ blob, url, loading, error }) =>
							loading ? "Loading document..." : "Download now!"
						}
					</PDFDownloadLink>
				</button>
			</div>
			<div className="viewContainer">
				<PDFViewer style={{ height: "500px", width: "500px" }}>
					<MyDocument
						sec1={sec1}
						sec2={sec2}
						passengers={passengers}
						sec4={sec4}
						children={children}
					/>
				</PDFViewer>
			</div>
		</div>
	)
}

export default App
