import addYears from "date-fns/addYears";
import addWeeks from "date-fns/addWeeks";
import addMonths from "date-fns/addMonths";
import { isWithinInterval } from "date-fns";

const filterData = (data, filters) => {
  let filteredData = data;
  if (filters.launchDate) {
    const end = new Date();
    let start = addWeeks(new Date(), -1);

    if (filters.launchDate === "last-month") {
      start = addMonths(new Date(), -1);
    } else if (filters.launchDate === "last-year") {
      start = addYears(new Date(), -1);
    }
    filteredData = data.filter((item) => isWithinInterval(new Date(item.launch_date_utc), {
      start,
      end,
    }));
  }
  filteredData = filters.launchStatus
    ? filteredData.filter((item) => (filters.launchStatus === "success"
      ? item.launch_success
      : !item.launch_success))
    : filteredData;
  filteredData = filters.upcoming
    ? filteredData.filter((item) => item.upcoming)
    : filteredData;
  return filteredData;
};

export default filterData;