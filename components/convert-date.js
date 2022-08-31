import { parseISO, format } from "date-fns";
import ja from 'date-fns/locale/ja'

export default function ConvetDate({ dateISO }) {
    return (
        <time detaTime={dateISO}>
            {format(parseISO(dateISO), 'yyyy年 MM月 dd日', {
                locale: ja,
            })}
        </time>
    )
}