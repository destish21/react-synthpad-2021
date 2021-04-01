import styled from 'styled-components'
import { useAppContext } from '../context'
import scales from '../utils/scales'

const Select = styled.select`
font-size:22px;
padding:12px;
border-radius:8px;
background:transparent;
border: 3px solid black;
${props => props.themi === 'light' ? ``:`
color: White;
border-color:White;
`}
`
const categories = Object.entries(scales).reduce((accumulator, curr) => {
const [key, scale] = curr
accumulator[scale.theme].push(key)
return accumulator
}, { light: [], dark: [] })

const ScaleSelector = () =>{
    const { state, dispatch } = useAppContext()

    return (
<select them={state.theme} onChange={e =>dispatch({type: 'CHANGE_SCALE', payload: e.target.value})}>
    {Object.entries(categories).map(cat=>{
        const [categoryName, scaleNames] = cat
        return(
            <optgroup labele={categoryName} key={categoryName}>
                {scaleNames.map(name => <option value={name} key={name}>{name}</option>)}
            </optgroup>
        )
    })}
    {/* <optgroup lable="numbers">
        <option value={1}>1</option>
        <option value={2}>2</option>

    </optgroup>
    <optgroup labele="letters">
    <option value={1}>a</option>
        <option value={2}>a</option>

    </optgroup> */}
</select>
    )
}
export default ScaleSelector