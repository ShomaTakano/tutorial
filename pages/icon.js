//このページはアイコンを表示させるために作ったものです
// Chapter5.8用のインポート
import { FontAwesomeIcon } from '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/react-fontawesome'
import { faHouseChimney } from '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/free-solid-svg-icons'

export default function Icon() {
    return (
        <h1　>
            <FontAwesomeIcon icon={faHouseChimney}
                style={{ fontSize: '100px', color: 'burlywood' }}
            /> Home
        </h1>
    )
}