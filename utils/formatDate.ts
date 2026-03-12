const date = new Intl.DateTimeFormat("nl-BE", {
  dateStyle: "medium",
  timeStyle: "short",
});

const dateOnly = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

export default function formatDate(
  dateString: string,
  onlyDate: boolean = false,
) {
  if (!dateString) return "-";
  const dateObj = new Date(dateString);
  return onlyDate ? dateOnly.format(dateObj) : date.format(dateObj);
}
