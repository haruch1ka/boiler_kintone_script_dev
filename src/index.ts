import message from "./message";
kintone.events.on("app.record.create.show", (event) => {
	const record = event.record;
	record["Hello"].value = message;
	return event;
});
