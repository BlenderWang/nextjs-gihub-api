import React from "react";
import { SharedType } from "../../global/types";

interface TextInputProps extends SharedType {
	placeholder: string;
}

const TextInput = ({
	label,
	value,
	onChange,
	placeholder,
	className,
}: TextInputProps) => {
	const textInputClass = className ? `${className} field` : "field";

	return (
		<div className={textInputClass}>
			<div className="control">
				<label className="label">{label}</label>
				<input
					className="input is-primary"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default TextInput;
