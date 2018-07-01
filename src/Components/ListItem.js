import React, { Component } from 'react';
class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.todos.map(item =>(
                    <div
                    key={item.id} //คีย์ต้องเปลี่ยนเสมอ เวลา map คีย์ไม่ซ้ำกัน
                    style={{
                    backgroundColor: "#fefefe",
                    borderColor: "#ccc",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderRadius: 5,
                    margin: 2,
                    padding: 5,
                    paddingTop: 10,
                    paddingBottom: 19
                    }}
                    >
                    <input type="checkbox" />
                    {item.name}
                    </div>
                ))}
            </div>            
        );
    }
}

export default ListItem;