import React from 'react';
import { Popover, Typography } from "@mui/material"

function PopOver ({id,open,anchorEl,content,handleClose,click}) {
 
    return (
      <>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className="pop">

          {content.map((item) => {
            return (
              <span
                className="span_symbol"
                key={item.id}
                 onClick={(e) => click(item.content,e)}
              >
                {item.content}
              </span>
            )
          })}
            </div>

        </Typography>
      </Popover>
</>

    );
  
}

export default PopOver
