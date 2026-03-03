const date = new Intl.DateTimeFormat("nl-BE", {
  dateStyle: "medium",
  timeStyle: "short",
});

export default function formatDate(dateString: string) {
  if (!dateString) return "-";
  const dateObj = new Date(dateString);
  return date.format(dateObj);
}
