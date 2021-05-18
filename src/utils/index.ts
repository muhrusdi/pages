import { format } from "date-fns"

export const formatDate = (date, str = "dd MMM yyyy") => format(new Date(date), str)