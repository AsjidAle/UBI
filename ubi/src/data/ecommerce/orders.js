import React, { useState } from 'react';
import { Tooltip, OverlayTrigger, Button, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import OrderServices from '../../services/OrderServices';
import Utils from '../../utils/Utils';

export function Orderdatatable({ orders }) {

    if (!orders || orders.length === 0) {
        return <div>No data available</div>;
    }

    const columns = [
        {
            name: "Order ID",
            selector: row => [row.id],
            sortable: true,
            width: '165px',
        },
        {
            name: "Product NAME",
            selector: row => [row.products.name],
            sortable: true,
            width: '165px',
        },
        {
            name: "DATE",
            selector: row => {
                const date = new Date(row.created_at);
                const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
                return [formattedDate];
            },
            sortable: true,
            width: '140px',
        },
        {
            name: "Price",
            selector: row => [row.price],
            sortable: false,
            width: '140px',
        },
        {
            name: "Quantity",
            selector: row => [row.amount], // Assuming the quantity is stored in 'amount'
            sortable: true,
            width: '140px',
        },
        {
            name: "STATUS",
            selector: row => [row.fulfiled ? 'Fulfil' : 'Pending'],
            sortable: true,
            cell: row => (
                <div>
                    <span className={`status bg-${row.fulfiled ? 'success' : row.deleted_at ? 'danger' : 'warning'}`}></span>
                    {row.fulfiled ? 'Fulfiled' : row.deleted_at ? 'Canceled' : 'Pending'};
                </div>
            )
        },
        {
            name: "Fulfiled",
            selector: row => [row.fulfilled ? 'Fulfiled' : ''],
            sortable: true,
            cell: row => (
                <div className="button-list text-center" >
                    <Row>
                        <Col sm={6}>
                            <Button disabled={row.deleted_at ? true : row.fulfiled ? true : false} placement={row.id} onClick={() => click(row.id)} overlay={<Tooltip>Fulfil</Tooltip>}>
                                <i className="ti ti-check"></i>
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button className='bg bg-danger' disabled={row.fulfiled ? true : row.deleted_at ? true : false} placement={row.id} onClick={() => clickCancel(row.id)} overlay={<Tooltip>Fulfil</Tooltip>}>
                                <i className="ti ti-close"></i>
                            </Button>
                        </Col>
                    </Row>
                </div>
            )
        },
    ];

    var click = async (id) => {
        var response = await OrderServices.fulfil(id);
        Utils.Toast('success', response.data);
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }

    var clickCancel = async (id) => {
        var response = await OrderServices.cancel(id);
        Utils.Toast('success', response.data);
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
    
    const tableData = {
        columns,
        data: orders,
    };

    return (
        <DataTableExtensions {...tableData} >
            <DataTable
                columns={columns}
                defaultSortAsc={false}
            // pagination
            />
        </DataTableExtensions>
    );
}
