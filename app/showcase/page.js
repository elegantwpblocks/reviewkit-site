import { Shot } from '../../components/ui';
export const metadata={title:'Showcase | Reviewkit'};
const L=[['grid.png','Review grid'],['list.png','Review list'],['carousel.png','Review carousel']];
export default function S(){return(<><section className="wrap head"><h1>See Reviewkit in action</h1><p className="lead">Layouts and badges, exactly as they appear on a live site.</p></section>
<section className="wrap showgrid">{L.map(([s,c])=><Shot key={s} src={s} alt={c} cap={c}/>)}</section>
<section className="wrap showgrid">{['widgets.png|All review widgets','badges.png|All trust badges'].map(x=>{const [s,c]=x.split('|');return <Shot key={s} src={s} alt={c} cap={c}/>})}</section></>)}
