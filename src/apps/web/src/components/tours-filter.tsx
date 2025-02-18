"use client";
import { DatePicker } from "@4k/ui/components/ui/date-picker";
import { parseAsIsoDate, useQueryStates } from "nuqs";
import { Button } from "@4k/ui/components/ui/button";
import { X } from "lucide-react";
import { useI18n } from "../locales/client";

const ToursFilter = () => {
  const [dates, setDates] = useQueryStates(
    {
      startDate: parseAsIsoDate,
      endDate: parseAsIsoDate,
    },
    {
      shallow: false,
    },
  );

  const t = useI18n();

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <p className="text-4xl text-center md:text-start">
        {t("destination.filter.subtitle")}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
        <DatePicker
          onSelect={(d) => setDates({ ...dates, startDate: d! })}
          selected={dates.startDate ?? undefined}
          placeholder={t("destination.filter.labels.startDate")}
        />
        <DatePicker
          onSelect={(d) => setDates({ ...dates, endDate: d! })}
          selected={dates.endDate ?? undefined}
          placeholder={t("destination.filter.labels.endDate")}
        />

        <Button
          className="h-10"
          onClick={() => setDates({ startDate: null, endDate: null })}
        >
          Clear filters <X />
        </Button>
      </div>
    </div>
  );
};

export default ToursFilter;
