import React from "react"
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Note
} from "@react-pdf/renderer"

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#E4E4E4"
	},
	section: {
		margin: 1,
		padding: 3
		// flexGrow: 1
	},
	section0: {
		margin: 1,
		padding: 3,
		// flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	title: {
		fontWeight: "bold",
		fontSize: "6px"
	},
	txt: {
		fontSize: "5px"
	},
	txtsm: {
		fontSize: "4px"
	},
	txtsep: {
		fontSize: "5px",
		marginTop: "-3px",
		marginBottom: "-2px"
	},
	txtentry: {
		fontSize: "5px",
		fontWeight: "bold",
		color: "blue"
	},
	sec1textrow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	sec1txtleft: {
		fontSize: "5px",
		width: "90%"
	},
	sec2txtrow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	table: {
		display: "table",
		width: "auto",
		borderStyle: "solid",
		borderWidth: 1,
		borderRightWidth: 0,
		borderBottomWidth: 0
	},
	tableRow: {
		margin: "auto",
		flexDirection: "row"
	},
	tableColThin: {
		width: "10%",
		borderStyle: "solid",
		borderWidth: 1,
		borderLeftWidth: 0,
		borderTopWidth: 0
	},
	tableColMax: {
		width: "40%",
		borderStyle: "solid",
		borderWidth: 1,
		borderLeftWidth: 0,
		borderTopWidth: 0
	},
	tableColMaxBig: {
		width: "70%",
		borderStyle: "solid",
		borderWidth: 1,
		borderLeftWidth: 0,
		borderTopWidth: 0
	},
	tableColMid: {
		width: "15%",
		borderStyle: "solid",
		borderWidth: 1,
		borderLeftWidth: 0,
		borderTopWidth: 0
	},
	tableCell: {
		margin: "auto",
		marginTop: 5,
		fontSize: "6px"
	}
})

// Create Document Component
function MyDocument({ sec1, sec2, sec4, passengers, children }) {
	return (
		<Document>
			<Page size="A6" style={styles.page}>
				<View style={styles.section0}>
					<Text style={styles.title}>
						S.S TOUR & TRAVEL, Bulanala, Varanasi
					</Text>
					<Text style={styles.title}>
						RESERVATION/CANCELLATION REQUISITION FORM
					</Text>
				</View>
				<View style={styles.section}>
					<View style={styles.sec1textrow}>
						<Text style={styles.sec1txtleft}>
							- If you are a Medical Practitioner, Please tick in Box (You could
							be of help in an emergency):{" "}
						</Text>
						<Text style={styles.txt}>{sec1[0] ? "Yes" : "No"}</Text>
					</View>
					<View style={styles.sec1textrow}>
						<Text style={styles.sec1txtleft}>
							- If you are a Pregnant woman and want to get berth in Quota. If
							yes, please submit certificate of Regd. Doctor:{" "}
						</Text>
						<Text style={styles.txt}>{sec1[1] ? "Yes" : "No"}</Text>
					</View>

					<View style={styles.sec1textrow}>
						<Text style={styles.sec1txtleft}>
							- If you want Sr. Citizen Concession, please write Yes/No in Box
							(Please carry a proof of age during the journey to avoid
							inconvenience of penal charging):{" "}
						</Text>
						<Text style={styles.txt}>{sec1[2] ? "Yes" : "No"}</Text>
					</View>

					<View style={styles.sec1textrow}>
						<Text style={styles.sec1txtleft}>
							- Do you want to be upgraded without any extra charge? Write
							Yes/No (if this option is not exercised, full fare paying
							passengers may be upgraded automatically):
						</Text>
						<Text style={styles.txt}>{sec1[3] ? "Yes" : "No"}</Text>
					</View>

					<View style={styles.sec1textrow}>
						<Text style={styles.sec1txtleft}>
							- If you are travelling in 3 AC Class of Garib Rath Express Train
							or in Sleeper Class of Duronto Express Train, do you want a
							bedroll in train ?:{" "}
						</Text>
						<Text style={styles.txt}>{sec1[4] ? "Yes" : "No"}</Text>
					</View>
				</View>
				<View style={styles.section}>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Train No. & Name: </Text>
						<Text style={styles.txtentry}>{sec2.trainNoAndName}</Text>
						<Text style={styles.txt}>Date of Journey: </Text>
						<Text style={styles.txtentry}>{sec2.dateOfJourney}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Class: </Text>
						<Text style={styles.txtentry}>{sec2.class}</Text>
						<Text style={styles.txt}>No. of Berths/Seats: </Text>
						<Text style={styles.txtentry}>{sec2.numberOfSeats}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Station From: </Text>
						<Text style={styles.txtentry}>{sec2.stationFrom}</Text>
						<Text style={styles.txt}>To: </Text>
						<Text style={styles.txtentry}>{sec2.stationTo}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Boarding at: </Text>
						<Text style={styles.txtentry}>{sec2.boardingAt}</Text>
						<Text style={styles.txt}>Reservation Upto: </Text>
						<Text style={styles.txtentry}>{sec2.reservationUpto}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Mobile Number: </Text>
						<Text style={styles.txtentry}>{sec2.mobile}</Text>
						<Text style={styles.txt}>(For PNR Status update through SMS)</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
				</View>

				<View style={styles.section}>
					<View style={styles.table}>
						<View style={styles.tableRow}>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>S.No</Text>
							</View>
							<View style={styles.tableColMax}>
								<Text style={styles.tableCell}>Name (15 max.)</Text>
							</View>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>Gender</Text>
							</View>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>Age</Text>
							</View>
							<View style={styles.tableColMid}>
								<Text style={styles.tableCell}>Concession/TA No.</Text>
							</View>
							<View style={styles.tableColMid}>
								<Text style={styles.tableCell}>Any demand</Text>
							</View>
						</View>
						{passengers.map((p) => (
							<View style={styles.tableRow}>
								<View style={styles.tableColThin}>
									<Text style={styles.tableCell}>{p.sno}.</Text>
								</View>
								<View style={styles.tableColMax}>
									<Text style={styles.tableCell}>{p.name}</Text>
								</View>
								<View style={styles.tableColThin}>
									<Text style={styles.tableCell}>{p.gender}</Text>
								</View>
								<View style={styles.tableColThin}>
									<Text style={styles.tableCell}>{p.age}</Text>
								</View>
								<View style={styles.tableColMid}>
									<Text style={styles.tableCell}>{p.tan}</Text>
								</View>
								<View style={styles.tableColMid}>
									<Text style={styles.tableCell}>{p.berthDemand + "," + p.mealDemand}</Text>
								</View>
							</View>
						))}
					</View>
					<Text style={[styles.txt, { margin: "3px auto" }]}>
						Children under age of 5 Years (For whom tickets are not issued)
					</Text>
					<View style={styles.table}>
						<View style={styles.tableRow}>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>S. No.</Text>
							</View>
							<View style={styles.tableColMaxBig}>
								<Text style={styles.tableCell}>Name (15 max.)</Text>
							</View>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>Gender (M/F)</Text>
							</View>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>Age</Text>
							</View>
						</View>
						{children.map((child) => <View style={styles.tableRow}>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>{child.sno}.</Text>
							</View>
							<View style={styles.tableColMaxBig}>
								<Text style={styles.tableCell}>{child.name}</Text>
							</View>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>{child.gender}</Text>
							</View>
							<View style={styles.tableColThin}>
								<Text style={styles.tableCell}>{child.age}</Text>
							</View>
						</View>)}
					</View>
				</View>

				<View style={styles.section}>
					<Text style={[styles.title, { margin: "auto" }]}>
						ONWARD/RETURN JOURNEY DETAILS
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Train No. & Name: </Text>
						<Text style={styles.txtentry}>{sec4.trainNoAndName}</Text>
						<Text style={styles.txt}>Date of Journey: </Text>
						<Text style={styles.txtentry}>{sec4.dateOfJourney}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Class: </Text>
						<Text style={styles.txtentry}>{sec4.class}</Text>
						<Text style={styles.txt}>Station From: </Text>
						<Text style={styles.txtentry}>{sec4.stationFrom}</Text>
						<Text style={styles.txt}>To: </Text>
						<Text style={styles.txtentry}>{sec4.stationTo}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Name of Applicant: </Text>
						<Text style={styles.txtentry}>{sec4.fullname}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Full Address: </Text>
						<Text style={styles.txtentry}>{sec4.fulladdress}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Telephone No./Mobile No: </Text>
						<Text style={styles.txtentry}>{sec4.mobile}</Text>
						<Text style={styles.txt}>Date: </Text>
						<Text style={styles.txtentry}>{sec4.date}</Text>
						<Text style={styles.txt}>Time: </Text>
						<Text style={styles.txtentry}>{sec4.time}</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
				</View>
				<View style={styles.section}>
					<Text style={[styles.title, { margin: "auto" }]}>
						FOR OFFICIAL USE ONLY
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>S. No. of Requisition: </Text>
						<Text style={styles.txtentry}>-</Text>
						<Text style={styles.txt}>PNR No: </Text>
						<Text style={styles.txtentry}>-</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<View style={styles.sec2txtrow}>
						<Text style={styles.txt}>Berth/Seat No: </Text>
						<Text style={styles.txtentry}>-</Text>
						<Text style={styles.txt}>Amount Collected: </Text>
						<Text style={styles.txtentry}>-</Text>
					</View>
					<Text style={styles.txtsep}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
				</View>
				<View style={[styles.section, { position: "absolute", bottom: 0 }]}>
					<Text style={styles.txt}>
						------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					</Text>
					<Text style={styles.txtsm}>
						{" "}
						1. Maximum permissible passengers is 6 per requisition.
					</Text>
					<Text style={styles.txtsm}>
						{" "}
						2. One person can give one requisition form at a time.
					</Text>
					<Text style={styles.txtsm}>
						{" "}
						3. Please check your ticket and balance amount before leaving the
						window.
					</Text>
					<Text style={styles.txtsm}>
						{" "}
						4. Forms not properly filled or in illegible forms shall not be
						entertained.
					</Text>
					<Text style={styles.txtsm}>
						{" "}
						5. Choice is subject to availability
					</Text>
					<Text style={styles.txtsm}>
						{" "}
						6. Passengers booked on single ticket may or may not get compact
						accomodation in the upgraded class.
					</Text>
					<Text style={styles.txtsm}>
						{" "}
						7. Pregnant women can get lower berth reserved for self on
						firs-come-first-served basis against sr. citizen quota.
					</Text>
					<Text style={styles.txtsm}>
						{" "}
						8. During the journey, one of the passengers has to produce one of
						the prescribed proofs of identity (in original).
					</Text>
				</View>
			</Page>
		</Document>
	)
}

export default MyDocument
