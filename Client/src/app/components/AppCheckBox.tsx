import { Checkbox, FormControlLabel } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

interface Props extends UseControllerProps {
    label: string;
}

export default function AppCheckBox(props: Props) {
    const { field } = useController({ ...props, defaultValue: false });
    console.log("field value", field.value);

    return (
        <FormControlLabel
            control={
                <Checkbox
                    {...field}
                    checked={field.value}
                    color="secondary"
                    disabled={props.disabled}
                />
            }
            label={props.label}
        />
    )
}