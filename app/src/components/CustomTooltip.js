import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const CustomTooltip = withStyles({
  tooltip: {
    // Your custom styles here
    fontSize: '1em',
    backgroundColor: '#333',
    color: '#fff',
  },
  popper: {
    transitionDelay: '500ms', // Appear after fixed mouse on top
  },
})(Tooltip);