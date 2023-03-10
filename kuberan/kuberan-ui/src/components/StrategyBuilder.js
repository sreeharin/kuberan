import '../styles/StrategyBuilder.css';
import StrategyBuilderHeader from './StrategyBuilderHeader';
import ToolBox from './ToolBox';

function BuildingArea(){
    return (
        <div>
            <h2>BuildingArea</h2>
            <div>Entry condition</div>
            <div>Exit condition</div>
        </div>
    );
}

export default function StrategyBuilder(){
    return (
        <div>
            <StrategyBuilderHeader />
            <div className="strategy-builder">
                <ToolBox />
                <BuildingArea />
            </div>
        </div>
    );
}