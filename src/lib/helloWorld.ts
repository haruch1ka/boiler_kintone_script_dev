import message from "./../component/message";

const main = () => {
kintone.events.on("app.record.create.show", (event) => {
	const record = event.record;
	record["Hello"].value = message;
	return event;
});

};
export default main;
