"use client";

import { forwardRef, HTMLProps, useState } from "react";
import {
  type CountryCallingCode,
  type E164Number,
  getExampleNumber,
  isValidPhoneNumber as matchIsValidPhoneNumber,
  parsePhoneNumberWithError,
} from "libphonenumber-js";
import i18nIsoCountries from "i18n-iso-countries";
import enCountries from "i18n-iso-countries/langs/en.json";
import PhoneInput, { type Country } from "react-phone-number-input/input";
import examples from "libphonenumber-js/mobile/examples";
import { Input } from "./input";

import { ComboboxCountryInput } from "./phone-input-combobox";
import {
  getCountriesOptions,
  isoToEmoji,
  replaceNumbersWithZeros,
} from "@/lib/phone-input-helpers";
import { cn } from "@/lib/utils";

type CountryOption = {
  value: Country;
  label: string;
  indicatif: CountryCallingCode;
};

i18nIsoCountries.registerLocale(enCountries);

const InputPhone = forwardRef<
  HTMLInputElement,
  {
    value?: string | undefined;
    onChange?: (value: string | undefined) => void;
    className?: string;
  }
>(({ value = "", onChange, className }, ref) => {
  const options = getCountriesOptions();

  // You can use a the country of the phone number to set the default country
  const defaultCountry = parsePhoneNumberWithError("+123456789")?.country;
  const defaultCountryOption = options.find(
    (option) => option.value === defaultCountry,
  );

  const [country, setCountry] = useState<CountryOption>(
    defaultCountryOption || options[0]!,
  );

  const placeholder = replaceNumbersWithZeros(
    getExampleNumber(country.value, examples)!.formatInternational(),
  );

  const onCountryChange = (value: CountryOption) => {
    onChange?.(undefined);
    setCountry(value);
  };

  const handleOnChange = onChange ?? (() => null);

  return (
    <div className={cn("not-prose flex flex-col gap-4", className)}>
      <div className="flex">
        <ComboboxCountryInput
          value={country}
          onValueChange={onCountryChange}
          options={options}
          placeholder="Find your country..."
          renderOption={({ option }) =>
            `${isoToEmoji(option.value)} ${option.label}`
          }
          renderValue={(option) => option.label}
          emptyMessage="No country found."
        />
        <div
          className={cn(
            "[&>input]:rounded-r-full [&>input]:rounded-l-none [&>input]:h-10 w-full",
            "[&>input]:bg-transparent focus-within:bg-blue-50",
            "[&>input]:focus-within:ring-0",
          )}
          tabIndex={1}
        >
          <PhoneInput
            international
            withCountryCallingCode
            country={country.value.toUpperCase() as Country}
            inputComponent={Input}
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
});

InputPhone.displayName = "InputPhone";

export { InputPhone };
