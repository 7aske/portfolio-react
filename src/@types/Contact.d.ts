type ContactType = "address" | "email" | "phone";
type Contact = {
	type: ContactType;
	value: string;
}
