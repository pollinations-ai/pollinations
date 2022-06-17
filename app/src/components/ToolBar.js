import styled from "@emotion/styled"
import { Box, Typography } from "@material-ui/core"
import Debug from "debug"
import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { mediaToDisplay } from "../data/media"
import useIPFS from "../hooks/useIPFS"
import { MediaViewer } from "./MediaViewer"
import ContentIdInfo from "./molecules/ContentId"
import GpuInfo from "./molecules/GpuInfo"
import Instructions from "./molecules/Instructions"
import NodeIdInfo from "./molecules/NodeId"
import ToolBarContainer from "./organisms/Toolbar"

const debug= Debug("ToolBar")

const HideToolBar = styled.div`
display: ${props => props.hideAnyway ? 'none' : 'block'};
@media (max-width: 600px) {
    display: none;
}
`
// routes that will hide the toolbar
const ROUTESOUT = [
    '/envisioning',
    '/'
]

const ToolBar = ({ node, showNode }) => {

const location = useLocation();

return <HideToolBar hideAnyway={ROUTESOUT.some(path => location.pathname === path )}>
    <ToolBarContainer node={node} showNode={showNode}>
    {
        node?.connected ?  <>
            <GpuInfo {...node} />
            <NodeIdInfo {...node} />
            <ContentIdInfo {...node} />
            <br/>
            <OutputPreview {...node} />
        </> 
        : <Instructions />
    }
    </ToolBarContainer>
</HideToolBar>
}
const OutputPreview = ({ contentID }) => {
    
    const ipfs = useIPFS(contentID)

    const { first } = useMemo(() => {
        return mediaToDisplay(ipfs.output)
      }, [ipfs?.output])
    debug("first", first)
    return <><Box ><Typography>Intermediate Result:</Typography><MediaViewer {...first} content={first.url} style={{ maxWidth: '70%' }} /></Box></>
}


export default ToolBar