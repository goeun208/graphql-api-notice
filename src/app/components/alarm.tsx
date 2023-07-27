import { graphql } from '@/gql';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Alarm = ({data}:any) => {
    return (
        <div className="fixed bottom-10 right-10 w-[3rem]">
            <NotificationsIcon fontSize="large" className='cursor-pointer' />
        </div>
    )
}

export default Alarm;