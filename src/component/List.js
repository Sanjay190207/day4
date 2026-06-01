"use client";
import {useState} from "react";
import styles from "./List.module.css";

export default function List()
{
    const[Items,setItems]=useState(["Review project proposal", "Complete Q2 report", "Team meeting at 3 PM"]);
    const [text, setText] = useState("");
    
    return(
        <div style={containerStyles.container}>
            <div style={containerStyles.card}>
                <div style={containerStyles.header}>
                    <h1 style={containerStyles.title}>📝 Task Management</h1>
                    <p style={containerStyles.subtitle}>Keep track of your daily tasks</p>
                </div>
                
                <div style={containerStyles.inputSection}>
                    <h2 style={containerStyles.sectionTitle}>Add New Task</h2>
                    <div style={containerStyles.inputGroup}>
                        <input 
                            type="text"
                            placeholder="Enter your task..."
                            value={text} 
                            onChange={function onchange(e)
                            {
                                setText(e.target.value);
                            }}
                            style={containerStyles.input}
                            onKeyPress={function(e) {
                                if(e.key === 'Enter' && text.trim()) {
                                    setItems([...Items, text]);
                                    setText("");
                                }
                            }}
                        />
                        <button 
                            onClick={function add()
                            {
                                if(text.trim())
                                {
                                    setItems([...Items, text]);
                                    setText("");
                                }
                            }}
                            style={containerStyles.addButton}
                        >
                            Add Task
                        </button>
                    </div>
                </div>

                <div style={containerStyles.listSection}>
                    <div style={containerStyles.listHeader}>
                        <h2 style={containerStyles.sectionTitle}>Your Tasks</h2>
                        <span style={containerStyles.taskCount}>{Items.length}</span>
                    </div>
                    {Items.length === 0 ? (
                        <p style={containerStyles.emptyMessage}>No tasks yet. Add one to get started! 🚀</p>
                    ) : (
                        <ul style={containerStyles.list}>
                            {Items.map(function(item,index)
                            {
                                return <li key={index} style={containerStyles.listItem}>
                                    <div style={containerStyles.itemContent}>
                                        <span style={containerStyles.itemCheckbox}>✓</span>
                                        <span style={containerStyles.itemName}>{item}</span>
                                    </div>
                                    <button 
                                        onClick={function deleteItem()
                                        {
                                            setItems(Items.filter(function(_, i)
                                            {
                                                return i !== index;
                                            }));
                                        }}
                                        style={containerStyles.deleteButton}
                                        onMouseOver={(e) => e.target.style.background = '#e74c3c'}
                                        onMouseOut={(e) => e.target.style.background = '#c0392b'}
                                    >
                                        Delete
                                    </button>
                                </li>
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

const containerStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
        minHeight: '400px',
    },
    card: {
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        padding: '40px',
        maxWidth: '700px',
        width: '100%',
        animation: 'slideUp 0.5s ease-out',
    },
    header: {
        marginBottom: '32px',
        paddingBottom: '24px',
        borderBottom: '2px solid #e8ecf1',
    },
    title: {
        fontSize: '32px',
        color: '#1e3c72',
        margin: '0 0 8px 0',
        fontWeight: '700',
    },
    subtitle: {
        fontSize: '14px',
        color: '#7f8c8d',
        margin: 0,
    },
    inputSection: {
        background: '#f8f9fa',
        padding: '24px',
        borderRadius: '12px',
        marginBottom: '28px',
    },
    sectionTitle: {
        fontSize: '16px',
        color: '#1e3c72',
        margin: '0 0 16px 0',
        fontWeight: '600',
    },
    inputGroup: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
    },
    input: {
        flex: '1',
        minWidth: '200px',
        padding: '12px 16px',
        border: '2px solid #e8ecf1',
        borderRadius: '10px',
        fontSize: '15px',
        transition: 'all 0.3s ease',
        fontFamily: 'inherit',
        outline: 'none',
    },
    addButton: {
        padding: '12px 28px',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
        fontFamily: 'inherit',
        boxShadow: '0 4px 12px rgba(30, 60, 114, 0.2)',
    },
    listSection: {
        background: '#f8f9fa',
        padding: '24px',
        borderRadius: '12px',
    },
    listHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
    },
    taskCount: {
        background: '#1e3c72',
        color: 'white',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '600',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        background: 'white',
        borderRadius: '10px',
        marginBottom: '10px',
        borderLeft: '4px solid #2a5298',
        transition: 'all 0.3s ease',
        animation: 'fadeIn 0.3s ease',
    },
    itemContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flex: 1,
    },
    itemCheckbox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        background: '#2a5298',
        color: 'white',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
    },
    itemName: {
        fontSize: '15px',
        color: '#1e3c72',
        fontWeight: '500',
    },
    deleteButton: {
        padding: '8px 16px',
        background: '#c0392b',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
        fontFamily: 'inherit',
    },
    emptyMessage: {
        textAlign: 'center',
        color: '#7f8c8d',
        padding: '30px 20px',
        fontSize: '15px',
    },
};