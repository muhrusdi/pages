import { format } from "date-fns"
import slug from "slugify"

export const formatDate = (date, str = "dd MMM yyyy") => format(new Date(date), str)

export const slugify = (str) => slug(str, {lower: true, remove: /[*+~.()'"!:@]/g})