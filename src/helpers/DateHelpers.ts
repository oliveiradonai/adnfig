import dayjs from "dayjs";

export function GetMyAge() {
	const birthDate = "1999-01-16";
	const today = dayjs();

	return today.diff(birthDate, "year");
}
