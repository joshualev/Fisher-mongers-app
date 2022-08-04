import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const Searchbar = ({ fishList }) => {
  const [filteredData, setFilteredData] = useState([])
  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = fishList.filter((value) => {
      return value.species.includes(searchWord)
    })
    if (searchWord.length !== 0) {
      setFilteredData(newFilter)
    } else {
      setFilteredData([])
    }
  }



  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleFilter}
        />
      </Search>
      {filteredData.length !== 0 && (
        <Container >
          {filteredData.map((fish) => {
            return (
              <Link
                style={{ textDecoration: 'none' }}
                to={fish._id}
              >
                <Button sx={{ color: 'inherit' }}>{fish.species}</Button>
              </Link>
            )
          })}
        </Container>
      )}
    </>
  )
}

export default Searchbar