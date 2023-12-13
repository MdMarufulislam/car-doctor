
const TableRow = ({booking}) => {
    const {img, title, price, date}=booking
    return (
        <div>

            
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                       
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">$ {price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">{date}</button>
            </th>
        </div>
    );
};

export default TableRow;