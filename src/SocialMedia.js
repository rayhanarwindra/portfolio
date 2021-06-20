import { IconButton } from "@material-ui/core"
function SocialMedia({icon, url}){
    return (
        <IconButton style={{color: "white"}} href={url} target="_blank">
            {icon}
        </IconButton>
    )
}

export default SocialMedia;