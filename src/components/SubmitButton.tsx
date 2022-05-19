import { Button, ButtonProps, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

interface Props {
    loading: boolean;
    buttonText: string;
    inline?: any;
    disabled?: boolean;
}
const SubmitButton: FC<ButtonProps<'button', Props>> = ({
    loading,
    buttonText,
    inline,
    disabled,
}: Props) => {
    return (
        <Button
            size="large"
            variant="contained"
            color="accent"
            type="submit"
            fullWidth={!inline}
            disabled={loading || disabled}>
            {loading ? <CircularProgress size={25} /> : buttonText}
        </Button>
    );
};

export default SubmitButton;
