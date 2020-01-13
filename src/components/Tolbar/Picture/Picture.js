import React from 'react';

import classes from './Picture.module.css';

const Picture = (props) => (
    <div className={classes.Picture} style={{height: props.height}}>
        <img src="https://lh3.googleusercontent.com/h0QR175HecwhTxxs10HV-gd22DktlcNr0Vz3dil6VwSOlfx46aZzGt4CpABdMNRHQ65UW6LFjSoBvqB_ucjGQxZCzff7OtnUzVwlmQ0bMwi7bFT8V1RO364f0QoEdLM4h8E3N-Mk8vKIWD3DuakxSkrp-YlYwwrd7rvF0HZhBcWyyHBSjS-6HuLFialoPcFHDjKhNdYo5S1A8LcVoMQITMMq5nDVtssm5Ka0faILkW0FMXwCkoGmHNbOSpEkJuK3Kb_fPGbnH6x4oXO8T1AFXnDlE_Qtqzedlhz21pbEPOn8-rhehMxmIyBSHP_vHf-JC7tpJc91NkgLCDIYWX3Dl3eiTImySl6DK_TXUcqf7E6ZlEAN23BmGaMUCg6oJe7fdrmX3QEYkT9Li8PGjsxx_orHn8WRUCdNi_q4B7atwdBJ4-Y7i_II71L5A1cMLKQTIGqc8OWlb7Z38Jbxe7jIidST_OxkHax979rM2mJLfEDH5BmDvZbiAG3xgVnOLJE8SoYUs0UH5DezMFejB9l-NXM6J1NE5q9RZip-gXFcu9PdvB_dFXNcQFEpTWmxzdCMPyMJDNoLWiYlr52y9vFQUGkEu4bM6xHEgqY7HcwK40Xh38A36O9T8gkvzEjbQH9LlOQuvrLwq7TZhLcr1o7uS144BBEP900BCD5n7Tq3lzxzqBpR_jFwrLc=w606-h624-no" alt="MyProfilePic" />
    </div>
);

export default Picture;