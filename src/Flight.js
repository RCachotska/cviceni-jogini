import './index.css'
import { Header } from '../Header'
import { Flight } from './Flight'

export const Letenky = (props) => {
    return (
        <>
            <Header title="Letenky ukázka:" />
            <Flight cityFrom = 'Praha' cityTo= 'Londýn' timeFrom= '3. srpna 2022, 13:30' timeTo= '3. srpna 2022, 14:00' />
            <Flight cityFrom = 'Praha' cityTo= 'Londýn' timeFrom= '3. srpna 2022, 15:30' timeTo= '3. srpna 2022, 16:00' />
            <Flight cityFrom = 'Praha' cityTo= 'Londýn' timeFrom= '3. srpna 2022, 17:30' timeTo= '3. srpna 2022, 18:00' />
        </>
    )
}