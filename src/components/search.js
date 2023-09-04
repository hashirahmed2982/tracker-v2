import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Grid, InputAdornment, OutlinedInput, Paper, SvgIcon ,Button, Stack} from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';

export const CustomersSearch = () => (
  <Paper >
    <Stack direction="row"
              justifyContent="space-between"
              spacing={1}>
    <OutlinedInput
      defaultValue=""
      fullWidth
      placeholder="Search "
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <MagnifyingGlassIcon />
          </SvgIcon>
        </InputAdornment>
      )}
      sx={{ maxWidth: 500 }}
    />
    <Grid>
                <Button sx={{ marginTop:'6px' }}
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
                </Grid>
                </Stack>
               
  </Paper>
);
