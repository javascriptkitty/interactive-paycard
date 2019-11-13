import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

type SimpleSelectProps = {
  title: string;
  data: string[];
  inputName: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

const SimpleSelect = ({ title, data }: SimpleSelectProps) => {
  const classes = useStyles();
  const [name, setValue] = React.useState("");

  // const inputLabel = React.useRef<HTMLLabelElement>(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current!.offsetWidth);
  // }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <FormControl className={classes.formControl}>
          <Select
            variant="outlined"
            value={name}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="" disabled>
              {title}
            </MenuItem>
            {data.map(item => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </FormControl>
    </div>
  );
};
export default SimpleSelect;
